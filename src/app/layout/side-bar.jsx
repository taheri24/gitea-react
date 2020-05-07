import {
    SideNavigation,
    NavigationHeader,
    Header,
    NestableNavigationContent,
    ButtonItem,
    NestingItem,
    Footer,
    NavigationFooter,
} from '@atlaskit/side-navigation';
import * as React from 'react';
import { LinkItem } from '@atlaskit/menu';
export function Sidebar() {

    return <SideNavigation label="project">
        <NavigationHeader>
            <Header>NXTGen Industries</Header>
        </NavigationHeader>
        <NestableNavigationContent>
            <ButtonItem>Your work</ButtonItem>
            <NestingItem title="Filters"  isSelected={true}>
                <LinkItem   href="sdf" isSelected={true}>Search Xissues</LinkItem>
                <ButtonItem>Search issues</ButtonItem>
                <ButtonItem>Search issues</ButtonItem>
                <ButtonItem>Search issues</ButtonItem>
            </NestingItem>
        </NestableNavigationContent>
        <NavigationFooter>
            <Footer>You're in a next-gen project</Footer>
        </NavigationFooter>
    </SideNavigation>
}