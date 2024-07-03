import { defineComponents } from '@tylertech/forge'
import '@tylertech/forge/dist/forge.css';

defineComponents();

function App() {
  return (
    <>
      <forge-scaffold>
        <forge-app-bar slot="header" title-text="My Application"></forge-app-bar>
        <forge-toolbar slot="body-header">
          <h2 className="forge-typography--heading4">My Page</h2>
        </forge-toolbar>
        <main slot="body">
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
