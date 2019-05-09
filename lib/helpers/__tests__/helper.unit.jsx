import classes from '../helper';
describe('classes', () => {
    it('classes 接受一个className', () => {
        const a = classes('test')
        expect(a).toEqual('test');
    });
    it('classes 接受两个className', () => {
        const a = classes('test1','test2')
        expect(a).toEqual('test1 test2');
    });
    it('classes 接受 undefined ', () => {
        const a = classes('test1',undefined)
        expect(a).toEqual('test1');
    });
    it('classes 接受各种奇怪参数 ', () => {
        const a = classes('test',undefined,null,false,'中文')
        expect(a).toEqual('test 中文');
    });
    it('classes 不接受参数 ', () => {
        const a = classes()
        expect(a).toEqual('');
    });
});
