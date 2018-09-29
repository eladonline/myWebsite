import React, { PureComponent } from 'react';
import { withRouter } from 'next/router';
import Layout from './Layout';

const RouterLayout = p => <Layout query={p.children} />;

const Routed = withRouter(props => <RouterLayout query={props} />);

export default Routed;
