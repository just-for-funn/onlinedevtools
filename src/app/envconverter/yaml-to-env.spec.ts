import { YamlToEnv } from './yaml-to-env';

describe('YamlToEnv', () => {
  it('should create an instance', () => {
    expect(new YamlToEnv()).toBeTruthy();
  });

  it('should convert to env when single prop', ()=>{

    let singleProp = "name: test";
    expect(YamlToEnv.convertToEnvList(singleProp))
       .toContain("NAME")
      
       expect(YamlToEnv.convertToEnvList(singleProp).length)
       .toEqual(1);   
  });

  it('should convert nested value' , ()=>{
    let arg = `
      person:
        job:
          title: 'developer'
    `;
     let values = YamlToEnv.convertToEnvList(arg);
     expect(values)
        .toContain("PERSON_JOB_TITLE");
  });

  it('should convert nested with multiple keys' , ()=>{
    let arg = `
      person:
        job:
          title: 'developer'
          age: '33'
        nickname: test
    `;
     let values = YamlToEnv.convertToEnvList(arg);
     expect(values).toContain("PERSON_JOB_TITLE");
     expect(values).toContain("PERSON_JOB_AGE");
     expect(values).toContain("PERSON_NICKNAME");
  });
  it('should convert arrays' , ()=>{
    let arg = `
      person:
        hobbies:
          - 'coding'
          - 'reading'
          - 'solving bugs'
    `;
     let values = YamlToEnv.convertToEnvList(arg);
     expect(values)
        .toContain("PERSON_HOBBIES");
  });

  it('should convert legacy syntax' , ()=>{
    let arg = `
      person.job.title: developer
      person.job.age: 33
    `;
     let values = YamlToEnv.convertToEnvList(arg);
     expect(values).toContain("PERSON_JOB_TITLE");
     expect(values).toContain("PERSON_JOB_AGE");
  });

  it('should parse dash' , ()=>{
    let arg = `
    a-person:
      job-title: 'dev'
  `;
   let values = YamlToEnv.convertToEnvList(arg);
   expect(values)
      .toContain("APERSON_JOBTITLE");
  });


});
