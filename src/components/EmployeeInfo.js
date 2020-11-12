import React from 'react';
import { Tabs, Tab, AppBar } from '@material-ui/core'
import Personal from './employee/Personal';
import Contact from './employee/Contact';

const EmployeeInfo = (props) => {
	const { match, history } = props;
  const { params } = match;
  const { page } = params;

  const tabNameToIndex = {
    0: "personal",
    1: "contact"
  };

  const indexToTabName = {
    about: 0,
    contact: 1
	};

	const style = {
    background : 'black'
	};
	const [selectedTab, setSelectedTab] = React.useState(0);

	const handleChange = (event, newValue) => {
		history.push(`/info/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
	};

	return (
		<>
		<AppBar position="static" style={{backgroundColor: 'black', color: 'white'}}>
			<Tabs value={selectedTab} onChange={handleChange}>
			 	<Tab icon={<i class="fa fa-user"></i>} label="Personal"  />
				<Tab icon={<i class="fa fa-address-book"></i>}label="Contact" />
				<Tab icon={<i class="fa fa-users"></i>}label="Family"/>
				<Tab icon={<i class="fa fa-graduation-cap"></i>}label="Qualification" />
				<Tab icon={<i class="fa fa-briefcase"></i>}label="Experience" />
			</Tabs>
		</AppBar>
		{selectedTab === 0 && <Personal/>}
		{selectedTab === 1 && <Contact />}
		</>
	)
}

export default EmployeeInfo;