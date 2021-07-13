import {Query, Get} from '../app'

@Get('/test')
@Query
export class Test {}

@Get('/test1')
@Query
export class Test1 {}

