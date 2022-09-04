import DataTableComponent from 'react-data-table-component';
import { Card, CardHeader } from 'reactstrap';
import DataTableProgress from './DataTableProgress';
import { Button, FormGroup, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

type DataTableProps = {
  title: string;
  columns: any[];
  data: any[];
  totalRows: number;
  loading: boolean;
  button?: boolean;
  buttonUrl?: string;
  settingsButton?: boolean;
  filtersList?: any[];
  onChangeRowsPerPage: (perPage: number) => Promise<void>;
  onChangePage: (page: number) => Promise<void>;
  onChangeFilter?: (filter: string) => void;
  onClickSettings?: () => void;
};

const DataTable = ({
  title,
  columns,
  data,
  totalRows,
  loading,
  button,
  buttonUrl,
  settingsButton,
  filtersList,
  onChangeRowsPerPage,
  onChangePage,
  onChangeFilter,
  onClickSettings,
}: DataTableProps) => {
  const customStyles = {
    table: {
      style: {},
    },
    header: {
      style: {
        borderRadius: 'calc(0.375rem - 1px) calc(0.375rem - 1px) 0 0',
        minHeight: '65px',
        fontSize: '1.0625rem',
        fontWeight: '900',
        lineHeight: '1.5',
      },
    },
    headCells: {
      style: {
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        background: '#F6F9FC',
        color: '#8898aa',
        fontSize: '0.65rem',
        paddingTop: '0.75rem',
        paddingBottom: '0.75rem',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        verticalAlign: 'middle',
        fontWeight: '600',
      },
    },
    rows: {
      style: {
        minHeight: '65px',
        fontSize: '0.8125rem',
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
        color: '#525f7f',
      },
    },
    cells: {
      style: {
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        fontSize: '0.8125rem',
      },
    },
  };
  const changeFilter = (filter: string) => {
    if (onChangeFilter) {
      onChangeFilter(filter);
    }
  };

  return (
    <>
      <Card className="shadow">
        <CardHeader className="border-0">
          <div className="row">
            <div className="col-12">
              <h3 className="mb-0">{title}</h3>
            </div>
            <div className="col-6 mt-3">
              {filtersList && (
                <FormGroup style={{ maxWidth: 150 }}>
                  <Input type="select" onChange={(e) => changeFilter(e.target.value)}>
                    {filtersList?.map((filter: any, index: number) => {
                      return (
                        <option
                          value={filter.value}
                          key={`filter-button-${index}`}
                          onChange={() => {
                            changeFilter(filter.value);
                          }}
                        >
                          {filter.label}
                        </option>
                      );
                    })}
                  </Input>
                </FormGroup>
              )}
            </div>
            <div className="col-6">
              <div className="col float-right">
                {button && (
                  <Link to={{ pathname: buttonUrl }} className="float-right">
                    <Button color="primary">Create New</Button>
                  </Link>
                )}
                {settingsButton && (
                  <i
                    className="fas fa-cog fa-lg float-right mt-3 mr-4"
                    style={{ cursor: 'pointer' }}
                    onClick={onClickSettings}
                  ></i>
                )}
              </div>
            </div>
          </div>
        </CardHeader>
        <DataTableComponent
          customStyles={customStyles}
          columns={columns}
          data={data}
          progressPending={loading}
          progressComponent={<DataTableProgress />}
          pagination
          paginationServer
          paginationTotalRows={totalRows}
          onChangeRowsPerPage={onChangeRowsPerPage}
          onChangePage={onChangePage}
        />
      </Card>
    </>
  );
};

export default DataTable;
