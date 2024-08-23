import Header from "./Header";
import Footer from "./Footer";
function Layout({children}: {children: React.ReactNode}) {
  return (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default Layout