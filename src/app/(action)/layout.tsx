import { AutoConnectProvider } from "@/components/AutoConnectProvider";
import FooterActionpage from "@/components/footer/footer-actionpage";
import HeaderActionPage from "@/components/header/header-actionpage";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { WalletProvider } from "@/components/WalletProvider";

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
        <AutoConnectProvider>
          <WalletProvider>
            <HeaderActionPage />
            <div className="flex min-h-screen flex-col">{children}</div>
            <FooterActionpage />
            <Toaster />
          </WalletProvider>
        </AutoConnectProvider>
      </ThemeProvider>
    </div>
  );
}
