import logo from './logo.svg';
import './App.css';
import AddItems from './Pages/AddItems/AddItems';
import UploadImages from './Pages/UploadImages/UploadImages';
import ImageDownloader from './Pages/AddItems/ImageDownloder/ImageDownloder';

function App() {
  return (
   <div>
    <AddItems/>
   <UploadImages/>
   <ImageDownloader/>
   </div>
  );
}

export default App;
