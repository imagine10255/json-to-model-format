import {Col, Container, Row} from 'library/styled-bs-grid';
import {Controller, useForm} from 'react-hook-form';
import {IFormData} from './types';
import {useEffect, useMemo} from 'react';
import {isJSON} from 'utils/equal';
import {toCapitalize, UpperCaseToLowerLineCase} from 'utils/format';




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

const convertField = (modelName: string|null, jsonObj: any) => {
    const field: string[] = [];

    if(typeof jsonObj === 'object'){
        for (const key in jsonObj) {
            // console.log(key, jsonObj[key]);
            const fieldType = convertFieldType(key, jsonObj[key]);
            field.push(`  ${fieldType.type} ${key};`);

            if(fieldType.newObj !== undefined && fieldType.newObjName !== undefined){
                convertField(fieldType.newObjName, fieldType.newObj);
            }
        }

        if(modelName != null){
            dataChild.push({
                name: modelName,
                field: field,
            });
        }

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

const JsonToTypescript = () => {
    const {control, watch, setValue} = useForm<IFormData>();

    const [modelName, jsonString, isUseCopyWith] = watch(['modelName', 'jsonString', 'isUseCopyWith']);


    useEffect(() => {
        setValue('jsonString', `
{
    "user": {
        "name": "jack",
        "sex": "m",
        "profile": {
             "phone": "0919123123",
             "mobile": "0918456456",
             "detail": {
                 "address": "taiwan chipn"
             }
        }
    }
}
`.trim())
    }, []);


    let jsonObj = useMemo(() => {
        if (isJSON(jsonString)) {
            return JSON.parse(jsonString);
        }
    }, [jsonString]);


    const renderDartModel = () => {
        dataChild = [];
        const data = convertField(null, jsonObj).reverse();

        return `
${data.map(row => {
            return `
interface ${row.name} {
${row.field.join('\n')} 
}
`
}).join('\n').trim()}

    `;
};

    const convertData = renderDartModel();

    return (
        <>

                <div className="text-center">
                    <h1>Json To Typescript Class</h1>
                </div>
                <Container className="pt-3">
                    <Row>
                        <Col col>
                            <Row>

                                <Col col={24}>
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
                            <textarea
                                style={{width: '100%', height: '100vh'}}
                                value={convertData}
                            />
                        </Col>

                    </Row>


                </Container>
        </>
    );
};

export default JsonToTypescript;

