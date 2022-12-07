import DashboardLayout from '../layouts/DashboardLayout/DashboardLayout';
import HomeLayout from '../layouts/HomeLayout/HomeLayout';
import '../styles/globals.scss';

const layouts = {
  home: HomeLayout,
  dashboard: DashboardLayout,
};

function MyApp({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || ((children) => <>{children}</>);
  console.log("comp = ",Component.layout);
  if(!Component.layout){
    return (
        <Component {...pageProps} />
    );
  }
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );

}

export default MyApp
