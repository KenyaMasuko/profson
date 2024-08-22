import MonacoEditor from "@monaco-editor/react";
import React from "react";

export const Editor: React.FC = () => {
  const defaultProfile = `{
    "name": "Your Name",
    "title": "Your Professional Title",
    "summary": "A brief summary about yourself",
    "skills": ["Skill 1", "Skill 2", "Skill 3"],
    "like": ["Like 1", "Like 2", "Like 3"],
  }`;
  const [editorContent, setEditorContent] =
    React.useState<string>(defaultProfile);

  React.useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const jsonParam = queryParams.get("profile");
    if (jsonParam) {
      try {
        const decodedJson = decodeURIComponent(jsonParam);
        const parsedJson = JSON.parse(decodedJson);
        setEditorContent(JSON.stringify(parsedJson, null, 2));
      } catch (error) {
        console.error("Failed to parse JSON from URL:", error);
        setEditorContent(defaultProfile);
      }
    } else {
      setEditorContent(defaultProfile);
    }
  }, []);

  const handleEditorChange = (value: string | undefined) => {
    if (value) {
      setEditorContent(value);
      try {
        const jsonObject = JSON.parse(value);
        const jsonString = JSON.stringify(jsonObject);
        const encodedJson = encodeURIComponent(jsonString);
        window.history.replaceState({}, "", `?profile=${encodedJson}`);
      } catch (error) {
        console.error("Failed to parse or encode JSON:", error);
      }
    }
  };

  return (
    <MonacoEditor
      height="80vh"
      language="json"
      theme="vs-dark"
      value={editorContent}
      onChange={handleEditorChange}
      options={{
        minimap: { enabled: false },
        automaticLayout: true,
        fontSize: 16,
        padding: { top: 30 },
      }}
    />
  );
};
