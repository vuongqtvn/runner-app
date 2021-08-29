import { useState } from 'react';
import { Route, Redirect } from "react-router-dom";

import { Layout, Menu, Breadcrumb } from 'antd';

import Header from '../Header';
import Sidebar from '../Sidebar';

import * as Style from './styles';

function AdminLayout({ exact, path, component: Component }) {
  const { Content } = Layout;

  const [isShowSidebar, setIsShowSidebar] = useState(true);

  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  // if (!userInfo) {
  //   return <Redirect to="/login" />
  // } else {
  //   if (userInfo.role === 'user') {
  //     return <Redirect to="/" />
  //   } else {
  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProps) => {
        return (
          <>
            <Header
              type="admin"
              isShowSidebar={isShowSidebar}
              setIsShowSidebar={setIsShowSidebar}
            />
            <Layout style={{ minHeight: '100vh'}}>
              <Sidebar {...routeProps} isShowSidebar={isShowSidebar} />
              <Style.SiteLayout >
                <Content style={{ margin: '16px' }}>
                  <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    <Component {...routeProps} />
                  </div>

                </Content>
              </Style.SiteLayout>
            </Layout>
          </>
        )
      }}
    />
  );
}
//   }
// }

export default AdminLayout;