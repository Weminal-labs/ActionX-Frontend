import FooterActionpage from "@/components/footer/footer-actionpage";
import HeaderActionPage from "@/components/header/header-actionpage";
import { ThemeProvider } from "@/components/theme-provider";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <HeaderActionPage />
        <div className="flex min-h-screen flex-col">{children}</div>
        <FooterActionpage />
      </ThemeProvider>
    </div>
  );
}
