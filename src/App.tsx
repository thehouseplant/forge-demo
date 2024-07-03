import { defineComponents } from '@tylertech/forge'
import '@tylertech/forge/dist/forge.css';

defineComponents();

function App() {
  return (
    <forge-scaffold>
      <forge-app-bar slot="header" title-text="Forge React">
        <forge-app-bar-menu-button slot="start"></forge-app-bar-menu-button>
        <forge-app-bar-search slot="center">
          <input type="text" placeholder="Search" />
        </forge-app-bar-search>
        <forge-app-bar-help-button slot="end"></forge-app-bar-help-button>
        <forge-app-bar-notification-button
          slot="end"
        ></forge-app-bar-notification-button>
        <forge-app-bar-app-launcher-button
          slot="end"
          allow-more="true"
        ></forge-app-bar-app-launcher-button>
        <forge-app-bar-profile-button
          slot="end"
          avatar-text="Sean Collins"
          full-name="Sean Collins"
          email="sean.collins@tylertech.com"
        ></forge-app-bar-profile-button>
      </forge-app-bar>
      <forge-drawer slot="body-left">
        <aside>
          <forge-list navlist>
            <forge-list-item selected>
              <forge-icon slot="start" name="inbox"></forge-icon>
              <a href="#">Inbox</a>
            </forge-list-item>
            <forge-list-item>
              <forge-icon slot="start" name="send"></forge-icon>
              <a href="#">Outgoing</a>
            </forge-list-item>
            <forge-list-item>
              <forge-icon slot="start" name="drafts"></forge-icon>
              <a href="#">Drafts</a>
            </forge-list-item>
            <forge-list-item>
              <forge-icon slot="start" name="send"></forge-icon>
              <a href="#">Sent</a>
            </forge-list-item>
          </forge-list>
        </aside>
      </forge-drawer>
      <main slot="body">
        <forge-banner theme="info">
          This site is heavily under construction. Please bear with us as we assemble the content.
        </forge-banner>
        <forge-card>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <forge-button id="popover-trigger" variant="raised">Show Popover</forge-button>
          <forge-popover
            anchor="popover-trigger"
            placement="bottom"
            position-strategy="fixed"
          >
            <forge-scaffold>
              <forge-toolbar no-border slot="header">
                <h2 className="forge-typography--heading4" slot="start">Popover Title</h2>
              </forge-toolbar>
              <div
                slot="body"
                style={{ width: "300px" }}
              >
                Popover content
              </div>
              <forge-toolbar no-border slot="footer">
                <forge-button slot="end" variant="filled">Close</forge-button>
              </forge-toolbar>
            </forge-scaffold>
          </forge-popover>
        </forge-card>

        <forge-card>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </forge-card>

        <forge-card>
        <forge-calendar view="month"></forge-calendar>
        </forge-card>
      </main>
      <forge-footer slot="footer">
        <p>My Footer</p>
      </forge-footer>
    </forge-scaffold>
  )
}

export default App
