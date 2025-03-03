import { useState } from "react";
import { observer } from "mobx-react";
import { useStore } from "../models/rootStore";
import { useHistory } from "react-router-dom";

import MainView from "../view/MainView";

const MainViewModel = observer(() => {
  const dataGames = [
    {
      id: 1,
      nameTitle: "Cuphead",
      img: "https://media.spelunky.fyi/mods/logo/01G98XE7AMVFVWB8YJBDYBV7NZ/1659230428504170.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mini et quisquam, consequatur expedita quasi numquam provident velitic corporis temporibus beatae reruaut, maiores debitis totamarchitecto excepturi, quos dolorum?",
      cashValue: 10000,
    },
    {
      id: 2,
      nameTitle: "Apex",
      img: "https://image.api.playstation.com/vulcan/ap/rnd/202502/0418/f8791059d96fa61d08f5433476c4f3337655262411eda101.png",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mini et quisquam, consequatur expedita quasi numquam provident velitic corporis temporibus beatae reruaut, maiores debitis totamarchitecto excepturi, quos dolorum?",
      cashValue: 30000,
    },
    {
      id: 3,
      nameTitle: "Legend of Zelda",
      img: "https://assets.nintendo.com/image/upload/q_auto/f_auto/ncom/software/switch/70010000000025/7137262b5a64d921e193653f8aa0b722925abc5680380ca0e18a5cfd91697f58",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mini et quisquam, consequatur expedita quasi numquam provident velitic corporis temporibus beatae reruaut, maiores debitis totamarchitecto excepturi, quos dolorum?",
      cashValue: 60000,
    },
    {
      id: 4,
      nameTitle: "GTA 5",

      img: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/05/gta-v-arte-grande-2321051.jpg?tf=3840x",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mini et quisquam, consequatur expedita quasi numquam provident velitic corporis temporibus beatae reruaut, maiores debitis totamarchitecto excepturi, quos dolorum?",
      cashValue: 5000,
    },
    {
      id: 5,
      nameTitle: "Counter Strike",
      img: "https://upload.wikimedia.org/wikipedia/en/f/f2/CS2_Cover_Art.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mini et quisquam, consequatur expedita quasi numquam provident velitic corporis temporibus beatae reruaut, maiores debitis totamarchitecto excepturi, quos dolorum?",
      cashValue: 7000,
    },
    {
      id: 6,
      nameTitle: "King of Figther",
      img: "https://i.ytimg.com/vi/5vuTtwk5b8E/hqdefault.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mini et quisquam, consequatur expedita quasi numquam provident velitic corporis temporibus beatae reruaut, maiores debitis totamarchitecto excepturi, quos dolorum?",
      cashValue: 90000,
    },
  ];

  const [user, setUser] = useState(""); // Estado para el usuario
  const [password, setPassword] = useState(""); // Estado para la contraseña
  const store = useStore();
  const authStore = store.authStore;
  const productStore = store.productStore;
  const navigate = useHistory();

  async function generateLog() {
    await authStore.login(user, password);
  }

  const setProductStoreFunc = (item) => {
    return () => {
      productStore.setSelectedProduct(item);
      navigate.push(`/game/detail/${item.id}`);
    };
  };

  return (
    <MainView
      user={user}
      setUser={setUser}
      password={password}
      setPassword={setPassword}
      generateLog={generateLog}
      setProductStoreFunc={setProductStoreFunc}
      dataProducts={dataGames}
    />
  );
});

export default MainViewModel;
