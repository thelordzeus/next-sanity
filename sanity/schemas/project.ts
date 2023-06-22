const project = {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: 'name' },
    },
    {
      name: "date",
      title: "Date",
      type: "datetime",
    },
    {
        name: "image",
        title: "Image",
        type: "image",
        Options: { hotspot: true },
        fields : [
            {
                name: "alt",
                type: "string",
            }

        ]
    },
    {
        name: "url",
        title: "URL",
        type: "url",

    },
    {
        name: "content",
        title: "Content",
        type: "array",
        of: [{ type: "block" }],

    }
  ],
};

export default project;