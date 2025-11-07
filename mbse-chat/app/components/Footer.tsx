export default function Footer() {
    return (
        <footer className="flex flex-wrap gap-3.5 ml-auto pl-10 pb-2 pt-10 px-4 items-center justify-center text-sm text-slate-300 z-1">
            <a href="https://www.arcfield.com/privacy-policy" target="_blank" className="hover:textPrimary transition-theme">
                Privacy Policy and Terms of Use
            </a>
            <a href="https://www.arcfield.com/contact" target="_blank" className="hover:textPrimary transition-theme">
                Contact Us
            </a>
            <a href="https://www.arcfield.com/suppliers" target="_blank" className="hover:textPrimary transition-theme">
                Suppliers and Small Businesses
            </a>
            <a href="https://www.arcfield.com/employees-and-alumni" className="hover:textPrimary transition-theme" target="_blank">
                Employees and Alumni
            </a>
        </footer>
    )
}
