export const RoutesPathDetails = {
    invoices: [{ path: '/invoice_informations' }, { path: '/invoice_list' }, { path: '/templates' }],
    corporate: [{ path: '/corporates' }, { path: '/add_lawfirm' }],
    lawfirm: [{ path: '/lawfirms' }, { path: '/add_corporate' }],
    validator: [{ path: '/validators' }],
    timekeeper: [{ path: '/timekeeper' }],
    matters: [{ path: '/matters' }, { path: '/matters_link' }],
    reports: [{ path: '/reports' }]
}

export const RoutesPath = (page) => {
    return RoutesPathDetails[page].map(data => data?.path)
}