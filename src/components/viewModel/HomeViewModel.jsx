import { useState } from "react";
import { observer } from "mobx-react";
import HomeView from "../view/HomeView";
import { useStore } from "../models/rootStore";

const HomeViewModel = observer(() => {
  const [user, setUser] = useState(""); // Estado para el usuario
  const [password, setPassword] = useState(""); // Estado para la contraseña
  const store = useStore();
  const authStore = store.authStore;

  async function generateLog() {
    await authStore.login(user, password);
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
