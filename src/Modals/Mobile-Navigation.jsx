import { MobileWrapper } from "../Styles/Modal-Style";


function MobileNavigation({showMobileNav, setshowMobileNav}) {
    return(
        <>
            <MobileWrapper className={showMobileNav ? 'active' : ''}>
                <div className="mobile_inner">
                    <div className="top_section">
                        <h2>My Profile</h2>
                    </div>
                    <div className="bottom_section"></div>
                </div>
            </MobileWrapper>
        </>
    );
}

export default MobileNavigation;