import { useState } from "react";
import { observer } from "mobx-react";
import HomeView from "../view/HomeView";
import { useStore } from "../models/rootStore";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const HomeViewModel = observer(() => {
  const [user, setUser] = useState(""); // Estado para el usuario
  const [password, setPassword] = useState(""); // Estado para la contraseña
  const store = useStore();
  const authStore = store.authStore;
  const navigate = useHistory();

  async function generateLog() {
    await authStore.login(user, password);
    navigate.push("/");
  }

  return (
    <HomeView
      user={user}
      setUser={setUser}
      password={password}
      setPassword={setPassword}
      generateLog={generateLog}
    />
  );
});

export default HomeViewModel;
