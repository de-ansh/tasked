import {OrgControl} from "./_component/orgController";

const OrganizationalIDLayout = ({children}:{children:React.ReactNode}) => {
    return ( 
        <div>
            <OrgControl/>
            {children}</div>
     );
}
 
export default OrganizationalIDLayout;