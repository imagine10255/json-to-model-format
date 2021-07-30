import styled, {ThemeProvider} from 'styled-components/macro';
import {Col, Container, GridThemeProvider, Row} from 'library/styled-bs-grid';
import getSetupParam from './setup';
import {Controller, useForm} from 'react-hook-form';
import {IFormData} from './types';
import {useMemo} from 'react';
import {isJSON} from 'utils/equal';
import {toCapitalize, UpperCaseToLowerLineCase} from '../../utils/format';


const setup = getSetupParam();


const convertFieldType = (key: string, field: any) => {

    console.log('typeof field', typeof field, key);
    if(field !== null) {
        switch (typeof field) {
            case 'boolean':
                return {type: 'bool', default: false};

            case 'number':
                if (field.toString().indexOf('.') != -1) {
                    return {type: 'double', default: 0};
                }
                return {type: 'int', default: 0};

            case 'string':
                return {type: 'String', default: undefined};

            case 'object':
                if(Array.isArray(field)){
                    if(field.length > 0){
                        if(['string','number','boolean'].includes((typeof field[0]))){
                            return {type: 'List<String>', default: undefined};
                        }
                        return {type: `List<${toCapitalize(key)}>`, default: undefined, newObjName: toCapitalize(key), newObj: field[0]};
                    }
                    return {type: `List<dynamic>`, default: undefined};

                }
                return {type: toCapitalize(key), default: undefined, newObjName: toCapitalize(key), newObj: field};

        }
    }

    return {type: 'dynamic', default: undefined};
};


let dataChild: any[] = [];

const convertField = (modelName: string, jsonObj: any) => {
    const constructor: string[] = [];
    const field: string[] = [];
    // const jsonObj = JSON.parse(jsonString);


    if(typeof jsonObj === 'object'){
        for (const key in jsonObj) {
            // console.log(key, jsonObj[key]);
            const fieldType = convertFieldType(key, jsonObj[key]);
            const defaultValue = fieldType.default !== undefined ? ` = ${fieldType.default}`:'';
            constructor.push(`       this.${key}${defaultValue},`);
            // field.push(`  ${fieldType.type}${fieldType.default === undefined ? '?':''} ${key};`);
            field.push(`  ${fieldType.type}? ${key};`);

            if(fieldType.newObj !== undefined && fieldType.newObjName !== undefined){
                convertField(fieldType.newObjName, fieldType.newObj);
            }
        }

        dataChild.push({
            name: modelName,
            constructor: constructor,
            field: field,
        });
    }

    return dataChild;


};


const handleDownload = (modelName: string, data: string) => {
    //藉型別陣列建構的 blob 來建立 URL
    let fileName = `${UpperCaseToLowerLineCase(modelName)}.dart`;
    let blob = new Blob([data], {
        type: "application/octet-stream",
    });
    var href = URL.createObjectURL(blob);
    // 從 Blob 取出資料
    var link = document.createElement("a");
    document.body.appendChild(link);
    link.href = href;
    link.download = fileName;
    link.click();
};

const App = () => {
    const {control, watch} = useForm<IFormData>();

    const [modelName, jsonString, isUseCopyWith] = watch(['modelName', 'jsonString', 'isUseCopyWith']);

    let jsonObj = useMemo(() => {
        if (isJSON(jsonString)) {
            return JSON.parse(jsonString);
        }
    }, [jsonString]);



    const renderDartModel = () => {
        dataChild = [];
        const data = convertField(modelName, jsonObj).reverse();

        return `
${isUseCopyWith ? 'import \'package:copy_with_extension/copy_with_extension.dart\';':''}
import 'package:json_annotation/json_annotation.dart';

part '${UpperCaseToLowerLineCase(modelName)}.g.dart';

${data.map(row => {
            return `
${isUseCopyWith ? '@CopyWith()':''}
@JsonSerializable()
class ${row.name} {
  ${row.name}({
${row.constructor.join('\n')}
  });

${row.field.join('\n')} 
 
  /// JsonSerializable Build
  factory ${row.name}.fromJson(Map<String, dynamic> json) => _$${row.name}FromJson(json);
  Map<String, dynamic> toJson() => _$${row.name}ToJson(this);
}
`
}).join('\n')}

    `;
};

    const convertData = renderDartModel();

    return (
        <GridThemeProvider gridTheme={setup.gridConfig}>

                <div className="text-center">
                    <h1>Json To Dart Model</h1>
                </div>
                <Container className="pt-3">
                    <Row>
                        <Col col>
                            <Row>
                                <Col col={24}>
                                    <Controller
                                        control={control}
                                        name="modelName"
                                        defaultValue=""
                                        render={({field}) => {
                                            return (<input
                                                style={{width: '100%'}}
                                                type="text"
                                                {...field}
                                            />);
                                        }}
                                    />

                                </Col>
                                <Col col={24}>
                                    <Controller
                                        control={control}
                                        name="isUseCopyWith"
                                        defaultValue=""
                                        render={({field}) => {
                                            return (<input
                                                type="checkbox"
                                                {...field}
                                            />);
                                        }}
                                    />
                                     use CopyWith
                                    <Controller
                                        control={control}
                                        name="jsonString"
                                        defaultValue=""
                                        render={({field}) => {
                                            return (<textarea
                                                style={{width: '100%', height: '100vh'}}
                                                {...field}
                                            />);
                                        }}
                                    />
                                </Col>
                            </Row>

                        </Col>
                        <Col col>
                            <button type="button" onClick={() => handleDownload(modelName, convertData)}>Download</button>
                            <textarea
                                style={{width: '100%', height: '100vh'}}
                                value={convertData}
                            />
                        </Col>

                    </Row>


                </Container>
        </GridThemeProvider>
    );
};

export default App;


const Console = styled.textarea`
  position: fixed;
  bottom: 0;
  z-index: 99;
  display: flex;
  font-size: 10px;
  border: none;
  background: #1f1f1f;
  color: #ccb444;
  border-radius: 0;
  width: 100%;
  height: 60px;

`;
