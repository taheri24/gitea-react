// @flow
import * as React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { AllRoutes } from './routes';
import Page from "@atlaskit/page";
import { AtlassianIcon } from "@atlaskit/logo";
//import Camera  from '@atlaskit/icon/glyph/folder'
import DashboardIcon  from '@atlaskit/icon/glyph/dashboard'
import Camera  from '@atlaskit/icon/glyph/document'
 
import {
  GlobalItem,
  GlobalNav,
  GlobalNavigationSkeleton,
  modeGenerator,
  ThemeProvider,
} from '@atlaskit/navigation-next';
import DepartmentIcon from '@atlaskit/icon/glyph/department';
import HomeIcon from '@atlaskit/icon/glyph/home';
import BitbucketSourceIcon from '@atlaskit/icon/glyph/bitbucket/source';
import BitbucketPullrequestsIcon from '@atlaskit/icon/glyph/bitbucket/pullrequests';
import EditorHintIcon from '@atlaskit/icon/glyph/editor/hint';
import FlagFilledIcon from '@atlaskit/icon/glyph/flag-filled';
import SwitcherIcon from '@atlaskit/icon/glyph/switcher';
import FolderIcon from '@atlaskit/icon/glyph/folder';
import { Sidebar } from './side-bar';
const GlobalNavWithRegularItems = () => (
  <GlobalNav
  
    primaryItems={[
      {
        icon: HomeIcon,
        id: 'logo',
        tooltip: 'Dashboard',
        onClick: () => console.log('Logo item clicked'),
      },
      {
        icon: EditorHintIcon  ,
        id: 'star',
        tooltip: 'Starred and recent',
        onClick: () => console.log('Search item clicked'),
      },
      {
        icon: BitbucketPullrequestsIcon,
        id: 'search',
        tooltip: 'Search',
        onClick: () => console.log('Search item clicked'),
      },
      {
        icon: FlagFilledIcon,
        id: 'create',
        tooltip: 'Create',
        onClick: () => console.log('Create item clicked'),
      },
      {
        icon: FolderIcon,
        id: 'create',
        tooltip: 'Create',
        onClick: () => console.log('Create item clicked'),
      },
      
    ]}
    secondaryItems={[
      {
        icon: () => <AtlassianIcon label="Atlassian" size="medium" />,
        id: 'help',
        onClick: () => console.log('Help item clicked'),
        tooltip: 'Help',
      },
      {
        component: ({ className, onClick }) => (
          <span className={className}>

          </span>
        ),
        icon: null,
        id: 'profile',
        onClick: () => console.log('Profile item clicked'),
        tooltip: 'Profile',
      },
    ]}
  />
);

export function MainLayout(p) {
  return <Router>
 
    <Page  css={{flex:1}}
      navigation={
        <aside style={{display:'grid',gridTemplateColumns:'max-content 1fr',width:400}}>  <GlobalNavWithRegularItems />
          <Sidebar />
        </aside>

      }
    >
      <div style={{minHeight:'100vh'}}>
        <AllRoutes />
      </div>
    </Page>

  </Router>
} 
