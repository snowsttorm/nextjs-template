import debounce from 'lodash/debounce';
import { z } from 'zod';
import { fetcher } from '@/utils/fetcher';
import { backendUrl } from '@/utils/constants';

const parseOrReturnError = <T>(
  schema: z.ZodType<T>,
  value: unknown
): string | undefined => {
  const result = schema.safeParse(value);
  return result.success ? undefined : result.error.issues[0].message;
};

const emailSchema = z
  .string()
  .email({ message: 'please enter a valid email address.' });
export function validateEmail(email: string): string | undefined {
  return parseOrReturnError(emailSchema, email);
}

const codeSchema = z
  .string()
  .regex(/^\d{6}$/, { message: 'please paste a 6-digit number' });
export function validateCode(code: string): string | undefined {
  return parseOrReturnError(codeSchema, code);
}

async function isUsernameTaken(username: string): Promise<boolean> {
  return await fetcher(
    `${backendUrl}/user/checkUsernameUniqueness/${username}`
  );
}

const debouncedIsUsernameTaken = debounce(
  (
    username: string,
    resolve: (result: boolean) => void,
    reject: (error: any) => void
  ) => {
    isUsernameTaken(username).then(resolve).catch(reject);
  },
  300
);

function checkUsernameDebounced(username: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    debouncedIsUsernameTaken(username, resolve, reject);
  });
}

const usernameSchema = z.string().min(5, { message: 'username is too short' });

export async function validateUsername(
  username: string
): Promise<string | undefined> {
  const parseError = parseOrReturnError(usernameSchema, username);
  if (parseError) return parseError;

  try {
    if (!(await checkUsernameDebounced(username))) {
      return 'username is already taken';
    }
  } catch (error) {
    return 'Error validating username';
  }

  return undefined;
}