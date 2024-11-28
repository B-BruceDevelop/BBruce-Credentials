export type NavLink = {
    name: string;
    href: string;
}

export type TextPosition = {
    text: string;
    position: "left" | "center" | "right"
}


export type Project = {
    id: number;
    name: string;
    page: React.ReactNode;
  };
  