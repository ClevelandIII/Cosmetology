import { useState } from "react";
import { List, Image, Search, Item } from "semantic-ui-react";
import axios from "axios";
import Cookies from "js-cookie";
import Router from "next/router";
import { baseURL } from "../../util/auth";
let cancel;

const SearchComponent = () => {
  
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [stylists, setStylists] = useState([]);
 
  
  //*handlers */

  const handleChange = async (e) => {
    const { value } = e.target;
    if (value === " ") return;
    setText(value);
    if (value) {
      setLoading(true);
      try {
        cancel && cancel();
        const token = Cookies.get("token");
        const res = await axios.get(`${baseURL}/api/v1/search/${value}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          cancelToken: new axios.CancelToken((canceler) => {
            cancel = canceler;
          }),
        });

        if (res.data.length === 0) {
          setStylists([]);
          return setLoading(false);
        }
        setStylists(res.data);
      } catch (error) {
        console.log("Error Searching", error);
      }
    } else {
      setStylists([]);
    }
    setLoading(false);
  };

  return (
    <Search
      onBlur={() => {
        stylists.length > 0 && setStylists([]);
        loading && setLoading(false);
        setText("");
      }}
      loading={loading}
      value={text}
      resultRenderer={ResultRenderer}
      stylists={stylists || null}
      onSearchChange={handleChange}
      placeholder="Find other users"
      minCharacters={1}
      onStylistSelect={(e, data) => Router.push(`/${data.stylist.firstName}`)}
    />
  );
};

const ResultRenderer = () => {
  return (
    <>
    {stylists.map((stylist) => {
      if (stylist.isTeacher === "false") {
        return (
          <>
    <List key={stylist._id}>
      <List.Item>
        <Image
          style={{
            objectFit: "contain",
            height: "1.5rem",
            width: "1.5rem",
          }}
          src={stylist.profilePicURL}
          alt="ProfilePic"
          avatar
        />
        <Item.Content header={stylist.firstName} as="a" />
      </List.Item>
    </List>
    </>
    );
  }
})}
</>
  );
};

export default SearchComponent;




// export default class App extends Component {
//   data = [
//     {
//       key: "john",
//       value: "John Doe",
//     },
//     {
//       key: "jane",
//       value: "Jane Doe",
//     },
//     {
//       key: "mary",
//       value: "Mary Phillips",
//     },
//     {
//       key: "robert",
//       value: "Robert",
//     },
//     {
//       key: "karius",
//       value: "Karius",
//     },
//   ];

//   render() {
//     return (
//       <ReactSearchBox
//         placeholder="Placeholder"
//         value="Doe"
//         data={this.data}
//         callback={(record) => console.log(record)}
//       />
//     );
//   }
// }
