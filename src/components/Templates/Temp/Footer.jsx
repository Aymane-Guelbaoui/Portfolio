const Footer = () => {
  return (
    <footer className="py-6 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <a
            href="#"
            className="hover:text-primary transition-colors duration-300"
          >
            Privacy Policy
          </a>
          <p className="text-center">
            © {new Date().getFullYear()} <span className="text-primary font-medium">Aymane Guelbaoui</span> — All rights reserved
          </p>
          <p className="hover:text-primary transition-colors duration-300">
            Powered by <span className="text-primary font-medium">Aymane</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
