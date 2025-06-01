const SignCloud = ({ children }: any) => (
  <div className='z-50 mb-6 flex items-center justify-center'>
    <div className='flex items-center space-x-4 rounded-lg bg-accent p-3'>
      <h2 className='flex flex-row items-center justify-center gap-2 text-2xl font-bold tracking-wider text-background uppercase'>
        {children}
      </h2>
    </div>
  </div>
);

export default SignCloud;
