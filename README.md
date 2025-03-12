# Created NotFound and Empty Components

This commit introduces `NotFound` and `Empty` components to handle scenarios where data is missing or not found.

<details>
<summary><strong>Changes</strong></summary>

- **NotFound Component:**
  _ Created a `NotFound` component (likely `NotFound.tsx` in the `components` directory).
  _ This component displays a message indicating that requested data or content was not found.
  _ It may include an icon or image to visually represent the "not found" state.
  _ Used Tailwind CSS classes for styling.

      ```typescript
      // components/NotFound.tsx (Example)
      import { View, Text, Image } from "react-native";

      import React from "react";
      import images from "@/constants/images";

      const NotFound = () => {
        return (
          <View className="flex-1 justify-center items-center">
          <Image
                  source={images.notFound}
                  className="w-56 h-56"
                  resizeMode="contain"
                />
          <Text className="text-white text-lg mt-4 font-nunito">
          Could'nt found any results
          </Text>
          </View>
        );
      };

      export default NotFound;

      ```

- **Empty Component:**

  - Created an `Empty` component (likely `Empty.tsx` in the `components` directory).
  - This component displays a message indicating that a list or data set is empty.
  - It may include an icon or image to visually represent the "empty" state.
  - Used Tailwind CSS classes for styling.

  ```typescript
  // components/Empty.tsx (Example)
  import { View, Text, Image } from "react-native";
  import React from "react";
  import images from "@/constants/images";

  const Empty = () => {
    return (
      <View className="flex-1 justify-center items-center">
        <Image
          source={images.notesImg}
          className="w-56 h-56"
          resizeMode="contain"
        />
        <Text className="text-white text-lg mt-4 font-nunito">Create your first note</Text>
      </View>
    );
  };

  export default Empty;

  ```

</details>

* **Purpose**

This commit improves the user experience by providing clear visual feedback when data is not found or when lists are empty. These components can be reused throughout the application.



- Integrate the `NotFound` and `Empty` components into appropriate parts of the application (e.g., search results, note lists).
- Add props to customize the messages or icons displayed by these components.
- Test the components with various data scenarios.
- Add better styling if needed.
