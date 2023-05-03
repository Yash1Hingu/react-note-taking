import logo from './logo.svg';
import './App.css';
import Notes from './components/Notes/Notes';
import Header from './components/UI/Header'
const DUMMAY_NOTES = [
  {
    id: 'n1',
    title: "note 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu augue ut lectus arcu bibendum at varius vel. Id venenatis a condimentum vitae sapien pellentesque habitant morbi. Consequat ac felis donec et odio pellentesque. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Eleifend donec pretium vulputate sapien. Fermentum iaculis eu non diam phasellus. Arcu dictum varius duis at consectetur lorem donec massa sapien. Pretium nibh ipsum consequat nisl vel pretium. Odio tempor orci dapibus ultrices. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Eu lobortis elementum nibh tellus."
  },
  {
    id: 'n2',
    title: "note 2",
    content: "Montes nascetur ridiculus mus mauris vitae. Scelerisque fermentum dui faucibus in ornare. Habitasse platea dictumst vestibulum rhoncus. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Vel risus commodo viverra maecenas. Nulla aliquet porttitor lacus luctus. Magna fermentum iaculis eu non. Duis at tellus at urna condimentum mattis pellentesque. Quam pellentesque nec nam aliquam sem et tortor consequat id. Posuere morbi leo urna molestie at elementum. Phasellus egestas t"
  },
  {
    id: 'n3',
    title: "note 3",
    content: "Ridiculus mus mauris vitae. Scelerisque fermentum dui faucibus in ornare. Habitasse platea dictumst vestibulum rhoncus. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Vel risus commodo viverra maecenas. Nulla aliquet porttitor lacus luctus. Magna fermentum iaculis eu non. Duis at tellus at urna condimentum mattis pellentesque. Quam pellentesque nec nam aliquam sem et tortor consequat id. Posuere morbi leo urna molestie at elementum. Phasellus egestas t"
  }
]
function App() {
  return (
    <div className="container">
      <Header />
      <Notes notes={DUMMAY_NOTES} />
    </div>
  );
}

export default App;