import { createRoute } from "honox/factory";
import { Editor } from "../islands/editor";

export default createRoute((c) => {
  return c.render(
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-2 text-center text-blue-600">
        Profson
      </h1>
      <p className="text-center mb-4 text-gray-600">
        Your Profile in JSON, Simplified
      </p>
      <Editor />
      <p className="mt-4 text-center text-sm text-gray-500">
        Share your profile easily by copying the URL. Your data is securely
        embedded in the link.
      </p>
    </div>,
    {
      title: "Profson",
      description: "Your Profile in JSON, Simplified",
    },
  );
});
