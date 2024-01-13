import type { ReactNode } from "react";
import { Global } from "@emotion/react";

import styles from "@/styles";

const AppProvider = ({ children }: { children: ReactNode }) => (
  <>
    <Global styles={styles} />
    {children}
  </>
);

export default AppProvider;
