import React from 'react'
import { styled } from '@mui/material/styles';
import {
    DataGrid,
    gridPageCountSelector,
    gridPageSelector,
    useGridApiContext,
    useGridSelector,
} from '@mui/x-data-grid';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

const DataGridComponent = (props: any) => {
    let columns = [];
    let rows = [];


    if (props.props) {

        columns = props.props.content.fields.map((h: any) => ({ field: h.Field_Name, headerName: h.Field_Title, width: 240, editable: false }))
        rows = props.props.content.data;
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
            },
            '& .MuiCheckbox-root svg path': {
                display: 'none',
            },
        };
    }

    const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
        letterSpacing: 'normal',
        '& .MuiDataGrid-columnsContainer': {
            backgroundColor: theme.palette.mode === 'light' ? 'white' : '#1d1d1d',
        },
        '& .MuiDataGrid-iconSeparator': {
            display: "none"
        },
        '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
            borderRight: `1px solid ${theme.palette.mode === 'light' ? 'white' : '#303030'
                }`,
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
            <div>
                <StyledDataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    checkboxSelection
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
                />
            </div>
        </>
    )
}

export default DataGridComponent