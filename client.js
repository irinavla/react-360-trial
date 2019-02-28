// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Surface } from 'react-360-web';

function init(bundle, parent, options = {}) {
  const SIZE = 300;

  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const sphereSurface = new Surface(
    SIZE,
    SIZE,
    Surface.SurfaceShape.Flat
  )

  sphereSurface.setAngle(0, 0);
  r360.renderToSurface(
    r360.createRoot('Info', { name: 'Sphere' }),
    sphereSurface
  );

  const capsuleSurface = new Surface(
    SIZE,
    SIZE,
    Surface.SurfaceShape.Flat
  )

  capsuleSurface.setAngle(Math.PI / 2, 0);
  r360.renderToSurface(
    r360.createRoot('Info', { name: 'Capsule' }),
    capsuleSurface
  );

  const cylinderSurface = new Surface(
    SIZE,
    SIZE,
    Surface.SurfaceShape.Flat
  )

  cylinderSurface.setAngle(Math.PI, 0);
  r360.renderToSurface(
    r360.createRoot('Info', { name: 'Cylinder' }),
    cylinderSurface
  );

  const cubeSurface = new Surface(
    SIZE,
    SIZE,
    Surface.SurfaceShape.Flat
  )

  cubeSurface.setAngle(-1 * Math.PI / 2, 0);
  r360.renderToSurface(
    r360.createRoot('Info', { name: 'Cube' }),
    cubeSurface
  );


  // Render your app content to the default cylinder surface
  // r360.renderToSurface(
  //   r360.createRoot('react_360_trial', { /* initial props */ }),
  //   r360.getDefaultSurface()
  // );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = { init };
