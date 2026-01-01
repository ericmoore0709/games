import Navbar from "./Navbar";
import SiteWideNotification from "./SiteWideNotification";

export default function Header() {
    return (
        <div>
            <Navbar />
            <SiteWideNotification />
        </div>
    );
}