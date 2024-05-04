function PageFrame({ children }) {
   return (
      <main
         className="relative mx-auto
         flex h-full
         min-h-screen
         max-w-screen-lg flex-row
         justify-between
         "
      >
         {children}
      </main>
   );
}

function MainFrame({ children }) {
   return <div className="flex flex-col py-24 sm:basis-3/4">{children}</div>;
}

function SectionFrame({ children }) {
   return (
      <section className="flex flex-col gap-y-16 px-4 py-20 md:px-8">
         {children}
      </section>
   );
}

function HeadingsFrame({ children }) {
   return <div className="flex flex-col gap-y-7">{children}</div>;
}

export { PageFrame, MainFrame, SectionFrame, HeadingsFrame };
