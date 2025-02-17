import { useState } from "react";
import { observer } from "mobx-react";
import { useStore } from "../models/rootStore";
import MainView from "../view/MainView";

const MainViewModel = observer(() => {
  const [user, setUser] = useState(""); // Estado para el usuario
  const [password, setPassword] = useState(""); // Estado para la contraseña
  const store = useStore();
  const authStore = store.authStore;

  async function generateLog() {
    await authStore.login(user, password);
  }

  return (
    <MainView
      user={user}
      setUser={setUser}
      password={password}
      setPassword={setPassword}
      generateLog={generateLog}
    />
  );
});

export default MainViewModel;
