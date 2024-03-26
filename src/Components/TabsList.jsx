
// import { useState } from 'react';
import { Tab, TabPanel, TabList, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'
import ReadBooksItem from './ReadBooksItem';
import WishlistItem from './WishlistItem';
const TabsList = () => {
    // const [tabIndex, setTabIndex] = useState(0)
    return (
        
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>
                <TabPanel>
                    <ReadBooksItem></ReadBooksItem>
                </TabPanel>
                <TabPanel>
                    <WishlistItem></WishlistItem>
                </TabPanel>
            </Tabs>
        
    );
};

export default TabsList;