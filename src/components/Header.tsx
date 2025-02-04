
import { Link } from "react-router-dom";
import { Wallet } from "lucide-react";
import { Button } from "./ui/button";

interface HeaderProps {
  isLoggedIn?: boolean;
  walletAddress?: string;
  walletBalance?: {
    busd: string;
    bnb: string;
  };
}

const Header = ({ isLoggedIn, walletAddress, walletBalance }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex w-full justify-between items-center gap-6 md:gap-10">
          {/* Logo */}
          <Link 
            to="/" 
            className="font-bold text-xl tracking-tight hover:text-primary transition-colors"
          >
            MatriXimo
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center gap-6 text-sm">
            <Link 
              to="/how-it-works"
              className="transition-colors hover:text-primary"
            >
              How it Works
            </Link>
            <a 
              href="https://support.matriximo.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              Support
            </a>
          </nav>

          {/* Wallet Section */}
          <div className="flex items-center gap-4">
            {isLoggedIn && walletBalance ? (
              <div className="flex items-center gap-4">
                <div className="hidden md:block text-sm text-right">
                  <p className="text-muted-foreground">Balance:</p>
                  <p>{walletBalance.busd} BUSD</p>
                  <p>{walletBalance.bnb} BNB</p>
                </div>
                <Button variant="outline" className="h-8">
                  <span className="hidden md:inline">{walletAddress}</span>
                  <span className="md:hidden">
                    {walletAddress?.substring(0, 4)}...{walletAddress?.substring(walletAddress.length - 4)}
                  </span>
                </Button>
              </div>
            ) : (
              <Button className="h-8">
                <Wallet className="mr-2 h-4 w-4" />
                Connect Wallet
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
