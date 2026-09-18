

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <div>
        <h1>layout</h1>
        {children}
    </div>
  );
}
