export default function Footer() {
    return (
        <footer className="flex flex-wrap gap-3.5 ml-auto pl-10 pb-2 pt-10 px-4 items-center justify-center text-sm text-slate-300 z-1">
            <a href="https://support.bolt.new/" target="_blank" className="hover:text-bolt-elements-textPrimary transition-theme">
                Privacy Policy and Terms of Use
            </a>
            <a href="https://stackblitz.com/terms-of-service" target="_blank" className="hover:text-bolt-elements-textPrimary transition-theme">
                Contact Us
            </a>
            <a href="https://stackblitz.com/privacy-policy" target="_blank" className="hover:text-bolt-elements-textPrimary transition-theme">
                Suppliers and Small Businesses
            </a>
            <div className="dot" />
            <a href="https://stackblitz.com/" className="hover:text-bolt-elements-textPrimary transition-theme" target="_blank">
                Employees and Alumni
            </a>
        </footer>
    )
}
