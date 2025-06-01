import { Toaster } from 'react-hot-toast';

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Toaster
        position='top-center'
        reverseOrder={false}
        gutter={8}
        containerClassName=''
        containerStyle={{}}
        toastOptions={{
          className: '',
          duration: 5000,
          style: {
            background: 'rgb(var(--background))',
            color: 'rgb(var(--foreground))',
            borderWidth: '2px',
            borderColor: 'rgb(var(--accent))',
            boxShadow: 'inset 0 2px 32px 0 rgba(245, 158, 11, 0.7)',
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: 'rgb(var(--highlight))',
              secondary: 'rgb(var(--background))',
            },
          },
        }}
      />
    </>
  );
}
