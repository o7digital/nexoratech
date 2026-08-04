export type RemoteSupportTool = "teamviewer" | "anydesk" | "rustdesk" | "custom";

export const remoteSupport = {
  provider: "custom" as RemoteSupportTool,
  url: "",
  label: "Conectar a soporte remoto",
};
