import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import {
    DataGrid,
    gridPageCountSelector,
    gridPageSelector,
    useGridApiContext,
    useGridSelector,
    gridClasses
} from '@mui/x-data-grid';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

const ODD_OPACITY = 0.2;

const DataGridComponent = (props: any) => {

    let columns: any = [];
    let rows: any = [];


    if (props.props.length > 0) {
        columns = props.props[0][1]
        rows = props.props[0][0]
    }

    function customCheckbox(theme: any) {
        return {
            '& .MuiCheckbox-root svg': {
                width: 16,
                height: 16,
                backgroundColor: 'transparent',
                border: `1px solid ${theme.palette.mode === 'light' ? 'white' : 'rgb(67, 67, 67)'
                    }`,
                borderRadius: 2,
                display: 'none'
            },
            '& .MuiCheckbox-root svg path': {
                display: 'none',
            },
        };
    }

    const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
        enableColumnAutosize: true,
        skipHeaderOnAutoSize: false,
        letterSpacing: 'normal',
        [`& .${gridClasses.row}.even`]: {
            backgroundColor: 'rgba(36,59,85,255)',
            // theme.palette.grey[200],
            '&:hover, &.Mui-hovered': {
                backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
                '@media (hover: none)': {
                    backgroundColor: 'transparent',
                },
            },
            '&.Mui-selected': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    ODD_OPACITY + theme.palette.action.selectedOpacity,
                ),
                '&:hover, &.Mui-hovered': {
                    backgroundColor: alpha(
                        theme.palette.primary.main,
                        ODD_OPACITY +
                        theme.palette.action.selectedOpacity +
                        theme.palette.action.hoverOpacity,
                    ),
                    // Reset on touch devices, it doesn't add specificity
                    '@media (hover: none)': {
                        backgroundColor: alpha(
                            theme.palette.primary.main,
                            ODD_OPACITY + theme.palette.action.selectedOpacity,
                        ),
                    },
                },
            },
        },
        '& .MuiDataGrid-columnsContainer': {
            backgroundColor: theme.palette.mode === 'light' ? 'rgba(36,59,85,255)' : 'rgba(36,59,85,255)'
            // '#1d1d1d',
        },
        '& .MuiDataGrid-iconSeparator': {
            display: "none"
        },
        '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
            borderRight: `1px solid ${theme.palette.mode === 'light' ? 'white' : '#303030'

                }`,
        },
        '& .MuiDataGrid-columnHeaderTitle': {
            backgroundColor: 'rgba(20,30,48,255)'
        },
        '& .MuiDataGrid-columnHeadersInner .MuiDataGrid-columnHeadersInner--scrollable': {
            backgroundColor: 'rgba(20,30,48,255)'
        },
        '& .MuiDataGrid-main': {
            backgroundColor: 'rgba(20,30,48,255)'
        },
        '& .MuiTypography-root .MuiTypography-body1 .MuiListItemText-primary': {
            color: 'black'
        },
        '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
            borderBottom: `1px solid ${theme.palette.mode === 'light' ? 'white' : '#303030'

                }`,
        },
        '& .MuiDataGrid-cell': {
            color:
                theme.palette.mode === 'light' ? 'white' : 'rgba(255,255,255,0.65)',

        },
        '& .MuiPaginationItem-root': {
            borderRadius: 0,
        },
        '& .MuiSvgIcon-root': {
            color: 'white'
        },
        '& .MuiTablePagination-root': {
            with: '100%'
        },
        '& .MuiButtonBase-root': {
            color: 'white'
        },

        ...customCheckbox(theme),
    }));

    function CustomPagination() {
        const apiRef = useGridApiContext();
        const page = useGridSelector(apiRef, gridPageSelector);
        const pageCount = useGridSelector(apiRef, gridPageCountSelector);

        return (
            <Pagination
                color="primary"
                variant="outlined"
                shape="rounded"
                page={page + 1}
                count={pageCount}
                // @ts-expect-error
                renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
                onChange={(event, value) => apiRef.current.setPage(value - 1)}
            />
        );
    }

    const PAGE_SIZE = 10;

    const [paginationModel, setPaginationModel] = React.useState({
        pageSize: PAGE_SIZE,
        page: 0,
    });

    return (
        <>
            <div style={{ height: '65vh' }}>
                <StyledDataGrid

                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                        columns: {

                            columnVisibilityModel: {
                                id: false,
                                rowId: false
                            },
                        },
                    }}
                    // checkboxSelection
                    paginationModel={paginationModel}
                    onPaginationModelChange={setPaginationModel}
                    pageSizeOptions={[PAGE_SIZE]}
                    slots={{
                        pagination: CustomPagination,
                    }}
                    disableRowSelectionOnClick
                    sx={{
                        backgroundColor: "#24292f", color: "white", borderColor: 'white',
                    }}
                    getRowClassName={(params) =>
                        params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
                    }
                />
            </div>
        </>
    )
}

export default DataGridComponent