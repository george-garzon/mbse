export default function Footer() {
    return (
        <footer
            className="absolute bottom-[10px] flex flex-wrap gap-3.5 w-full mt-10 items-center justify-center text-sm text-slate-300 z-[1]">
            <a href="https://www.arcfield.com/privacy-policy" target="_blank"
               className="hover:textPrimary transition-theme">
                Privacy Policy and Terms of Use
            </a>
            <a href="https://www.arcfield.com/contact" target="_blank" className="hover:textPrimary transition-theme">
                Contact Us
            </a>
            <a href="https://www.arcfield.com/suppliers" target="_blank" className="hover:textPrimary transition-theme">
                Suppliers and Small Businesses
            </a>
            <a href="https://www.arcfield.com/employees-and-alumni" target="_blank"
               className="hover:textPrimary transition-theme">
                Employees and Alumni
            </a>
        </footer>

    )
}
