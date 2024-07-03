import { defineComponents } from '@tylertech/forge'
import '@tylertech/forge/dist/forge.css';

defineComponents();

function App() {
  return (
    <>
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
        <forge-toolbar slot="body-header">
          <h2 className="forge-typography--heading4">My Page</h2>
        </forge-toolbar>
        <main slot="body">
          <forge-banner theme="info">
            This site is heavily under construction. Please bear with us as we assemble the content.
          </forge-banner>
          <forge-card>
            <p>My Content</p>
          </forge-card>
        </main>
        <forge-footer slot="footer">
          <p>My Footer</p>
        </forge-footer>
      </forge-scaffold>
    </>
  )
}

export default App
