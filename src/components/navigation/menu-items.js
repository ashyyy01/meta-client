const menu_items = [
    {
        header: true,
        title: "Main Navigation",
        hiddenOnCollapse: true,
    },
    {
        href: "/",
        title: "Home",
        icon: "fas fa-home",
    },
    {
        href: "/datastream",
        title: "View Data Stream",
        icon: "fa fa-database",
    },
    {
        href: "/lineage",
        title: "Lineage Tree",
        icon: "fa fa-stream",
    },
    {
        //   href: "/charts",
        title: "Charts",
        icon: "fa fa-chart-area",
        child: [
            {
                href: "/charts/sublink",
                title: "Sub Link",
            },
        ],
    },
    {
        footer: true,
        title: "Main Navigation",
        hiddenOnCollapse: true,
    },
]

export default menu_items