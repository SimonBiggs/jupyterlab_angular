import {
  JupyterLabPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab_angular extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'jupyterlab_angular',
  autoStart: true,
  activate: (app) => {
    console.log('JupyterLab extension jupyterlab_angular is activated!');
  }
};

export default extension;
