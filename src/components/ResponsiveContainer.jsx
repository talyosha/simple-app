// @flow
import * as React from 'react';
import { useState } from 'react';
import { Button, Container, Icon, Menu, Segment, Sidebar, Visibility } from 'semantic-ui-react';
import { createMedia } from '@artsy/fresnel';
import { NavLink } from 'react-router-dom';

type ChildrenProp = {
  children?: React.Node,
};

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

const DesktopContainer = ({ children }: ChildrenProp): React.Node => {
  const [fixed, setFixed] = useState(false);

  return (
    <Media greaterThan="mobile">
      <Visibility once={false} onBottomPassed={() => setFixed(true)} onBottomPassedReverse={() => setFixed(false)}>
        <Segment inverted textAlign="center" className="black-nav" vertical>
          <Menu fixed={fixed ? 'top' : null} inverted={!fixed} pointing={!fixed} secondary={!fixed} size="large">
            <Container>
              <NavLink to="/" exact as="a" className="item">
                Home
              </NavLink>
              <NavLink to="/items" as="a" className="item">
                Items
              </NavLink>
              <NavLink to="/store" as="a" className="item">
                Store
              </NavLink>

              <Menu.Item position="right">
                <NavLink to="/store">
                  <Button as="button" inverted={!fixed}>
                    Store
                  </Button>
                </NavLink>
              </Menu.Item>
            </Container>
          </Menu>
        </Segment>
      </Visibility>

      {children}
    </Media>
  );
};

const MobileContainer = ({ children }: ChildrenProp): React.Node => {
  const [sidebarOpened, setSidebarOpened] = useState(false);

  return (
    <Media as={Sidebar.Pushable} at="mobile">
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          inverted
          onHide={() => setSidebarOpened(false)}
          vertical
          visible={sidebarOpened}
        >
          <NavLink to="/" exact as="a" className="item">
            Home
          </NavLink>
          <NavLink to="/items" as="a" className="item">
            Items
          </NavLink>
          <NavLink to="/store" as="a" className="item">
            Store
          </NavLink>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment inverted textAlign="center" className="black-nav" vertical>
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={() => setSidebarOpened(true)}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                  <NavLink to="/items">
                    <Button as="button" inverted>
                      Items
                    </Button>
                  </NavLink>
                  <NavLink to="/store">
                    <Button as="button" inverted style={{ marginLeft: '0.5em' }}>
                      Store
                    </Button>
                  </NavLink>
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Media>
  );
};

const ResponsiveContainer = ({ children }: ChildrenProp): React.Node => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);

export default ResponsiveContainer;
