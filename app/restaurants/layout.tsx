import Banner from "./partials/Banner";


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <div>

        <Banner />
        <h1>layout</h1>
        {children}
    </div>
  );
}
